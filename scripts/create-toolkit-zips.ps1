# PowerShell script to create ZIP packages for toolkits
# Run from project root: .\scripts\create-toolkit-zips.ps1

$ErrorActionPreference = "Stop"

Write-Host "Creating toolkit ZIP packages..." -ForegroundColor Green

# Create zips directory if it doesn't exist
$zipsDir = "public\zips"
if (-not (Test-Path $zipsDir)) {
    New-Item -ItemType Directory -Path $zipsDir | Out-Null
    Write-Host "Created $zipsDir directory" -ForegroundColor Yellow
}

# Function to create ZIP file
function Create-Zip {
    param(
        [string]$SourceFolder,
        [string]$ZipName
    )
    
    $sourcePath = "public\templates\$SourceFolder"
    $zipPath = "$zipsDir\$ZipName"
    
    if (-not (Test-Path $sourcePath)) {
        Write-Host "ERROR: Source folder not found: $sourcePath" -ForegroundColor Red
        return $false
    }
    
    # Remove existing ZIP if it exists
    if (Test-Path $zipPath) {
        Remove-Item $zipPath -Force
        Write-Host "Removed existing $ZipName" -ForegroundColor Yellow
    }
    
    # Create ZIP file
    try {
        Compress-Archive -Path "$sourcePath\*" -DestinationPath $zipPath -Force
        Write-Host "✓ Created $ZipName" -ForegroundColor Green
        
        # Get file size
        $fileSize = (Get-Item $zipPath).Length / 1MB
        Write-Host "  Size: $([math]::Round($fileSize, 2)) MB" -ForegroundColor Gray
        return $true
    }
    catch {
        Write-Host "ERROR creating $ZipName : $_" -ForegroundColor Red
        return $false
    }
}

# Create ZIPs for each toolkit
Write-Host "`nCreating Compliance Toolkit ZIP..." -ForegroundColor Cyan
Create-Zip -SourceFolder "compliance-toolkit" -ZipName "compliance-framework-toolkit.zip"

Write-Host "`nCreating Incident Response Toolkit ZIP..." -ForegroundColor Cyan
Create-Zip -SourceFolder "incident-response-toolkit" -ZipName "incident-response-toolkit.zip"

Write-Host "`nCreating Vendor Risk Toolkit ZIP..." -ForegroundColor Cyan
Create-Zip -SourceFolder "vendor-risk-toolkit" -ZipName "vendor-risk-management-toolkit.zip"

Write-Host "`n✓ All toolkit ZIP packages created successfully!" -ForegroundColor Green
Write-Host "Location: $zipsDir" -ForegroundColor Gray

