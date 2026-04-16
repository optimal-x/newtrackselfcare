def replace [
      pattern: string,
      replacement: string,
      file: string
] {
    mut updated = (
        open $file
        | lines
        | each { |line| $line | str replace -r $pattern $replacement }
        | str join "\n"
    )
    # print $updated
    $updated | save -f $file
}

def replace-all [
    pattern: string,
    replacement: string,
    across: string
] {
    let files = rg -l $pattern --glob $across | lines
    for file in $files {
        print $"Replacing in ($file)"
        replace $pattern $replacement $file
    }
}
