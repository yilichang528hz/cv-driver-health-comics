@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul

title PNG to JPG Converter

echo ================================================
echo PNG to JPG Converter
echo ================================================
echo This tool converts all PNG files in one folder to JPG.
echo The original PNG files will be kept.
echo.

set "SCRIPT_DIR=%~dp0"
set "PY_FILE=%SCRIPT_DIR%png_to_jpg.py"

if not exist "%PY_FILE%" (
    echo [ERROR] png_to_jpg.py was not found in this BAT folder.
    echo Expected location:
    echo "%PY_FILE%"
    echo.
    pause
    exit /b 1
)

set "PYTHON_CMD="

where py >nul 2>nul
if %errorlevel%==0 (
    set "PYTHON_CMD=py -3"
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        set "PYTHON_CMD=python"
    )
)

if "%PYTHON_CMD%"=="" (
    echo [ERROR] Python 3 was not found.
    echo Please install Python 3 and enable "Add Python to PATH".
    echo.
    pause
    exit /b 1
)

echo [INFO] Checking Pillow package...
%PYTHON_CMD% -c "import PIL" >nul 2>nul
if errorlevel 1 (
    echo [INFO] Pillow is not installed. Installing Pillow...
    %PYTHON_CMD% -m pip install pillow
    if errorlevel 1 (
        echo.
        echo [ERROR] Pillow installation failed.
        echo Try this manually:
        echo %PYTHON_CMD% -m pip install pillow
        echo.
        pause
        exit /b 1
    )
)

echo.

REM Drag and drop mode.
if not "%~1"=="" (
    set "TARGET_FOLDER=%~1"
) else (
    set /p "TARGET_FOLDER=Enter the folder path. Leave blank to use this BAT folder: "
)

if "%TARGET_FOLDER%"=="" (
    set "TARGET_FOLDER=%SCRIPT_DIR%"
)

REM Remove accidental quotes from Explorer "Copy as path".
set "TARGET_FOLDER=%TARGET_FOLDER:"=%"

REM Remove trailing backslash if needed, except drive root like D:\
if not "%TARGET_FOLDER:~-1%"=="" (
    if "%TARGET_FOLDER:~-1%"=="\" (
        if not "%TARGET_FOLDER:~-3%"==":\" (
            set "TARGET_FOLDER=%TARGET_FOLDER:~0,-1%"
        )
    )
)

set /p "OVERWRITE=Overwrite existing JPG files? Y/N, default N: "
if /I "%OVERWRITE%"=="Y" (
    set "OVERWRITE_ARG=--overwrite"
) else (
    set "OVERWRITE_ARG="
)

echo.
echo [INFO] Target folder:
echo "%TARGET_FOLDER%"
echo.
echo [INFO] Starting conversion...

%PYTHON_CMD% "%PY_FILE%" "%TARGET_FOLDER%" %OVERWRITE_ARG%

echo.
echo [INFO] Finished.
pause
endlocal
