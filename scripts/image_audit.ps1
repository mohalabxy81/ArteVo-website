$ErrorActionPreference = 'Stop'

$root = Get-Location
Write-Host "Scanning HTML files under $root for <img> tags missing alt attributes..."

$files = Get-ChildItem -Path $root -Recurse -Include *.html | Where-Object { -not ($_.FullName -like "*/node_modules/*") }
$report = @()
foreach ($f in $files) {
    $lines = Get-Content $f.FullName
    for ($i=0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        if ($line -match "<img") {
            # join next few lines to capture multiline tags
            $snippet = $line
            for ($j=1; $j -le 4; $j++) {
                if ($i+$j -lt $lines.Count) { $snippet += " " + $lines[$i+$j] }
            }
            if ($snippet -notmatch "\balt=\s*\"[^\"]*\"" -and $snippet -notmatch "\balt=\s*'[^']*'" ) {
                $report += [pscustomobject]@{
                    file = $f.FullName
                    line = $i+1
                    snippet = $snippet.Trim()
                }
            }
        }
    }
}

if ($report.Count -eq 0) {
    Write-Host "No missing alt attributes found."
} else {
    Write-Host "Found $($report.Count) images missing alt attributes:`n"
    $report | Select-Object file,line,snippet | Format-Table -AutoSize
}

# exit code useful for CI
if ($report.Count -gt 0) { exit 2 } else { exit 0 }
