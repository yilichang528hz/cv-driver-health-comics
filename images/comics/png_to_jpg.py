from pathlib import Path
from PIL import Image
import argparse
import sys


def normalize_folder_path(folder_path: str) -> Path:
    """
    Normalize common Windows input cases:
    - Drag-and-drop folder paths
    - Explorer "Copy as path" with quotes
    - Accidental leading/trailing whitespace or quotes
    """
    cleaned = str(folder_path).strip().strip('"').strip("'").strip()
    return Path(cleaned)


def convert_png_to_jpg(folder_path: str, overwrite: bool = False) -> int:
    folder = normalize_folder_path(folder_path)

    if not folder.exists():
        print(f'[ERROR] Folder does not exist: {folder}')
        return 1

    if not folder.is_dir():
        print(f'[ERROR] This path is not a folder: {folder}')
        return 1

    png_files = sorted(
        [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() == ".png"],
        key=lambda p: p.name.lower()
    )

    if not png_files:
        print('[INFO] No PNG files found in this folder.')
        return 0

    success_count = 0
    skipped_count = 0
    failed_count = 0

    for png_file in png_files:
        jpg_file = png_file.with_suffix(".jpg")

        if jpg_file.exists() and not overwrite:
            print(f'[SKIP] JPG already exists: {jpg_file.name}')
            skipped_count += 1
            continue

        try:
            with Image.open(png_file) as img:
                # JPG does not support alpha transparency.
                # Transparent areas are composited onto a white background.
                img = img.convert("RGBA")
                background = Image.new("RGB", img.size, (255, 255, 255))
                background.paste(img, mask=img.getchannel("A"))
                background.save(jpg_file, "JPEG", quality=95, optimize=True)

            print(f'[OK] {png_file.name} -> {jpg_file.name}')
            success_count += 1

        except Exception as exc:
            print(f'[ERROR] Failed: {png_file.name} | {exc}')
            failed_count += 1

    print()
    print('================================================')
    print('Summary')
    print('================================================')
    print(f'Success: {success_count}')
    print(f'Skipped: {skipped_count}')
    print(f'Failed : {failed_count}')

    return 1 if failed_count else 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description='Convert all PNG files in one folder to JPG. Original PNG files are kept.'
    )
    parser.add_argument('folder', help='Folder containing PNG files')
    parser.add_argument('--overwrite', action='store_true', help='Overwrite existing JPG files')

    args = parser.parse_args()
    return convert_png_to_jpg(args.folder, args.overwrite)


if __name__ == '__main__':
    sys.exit(main())
