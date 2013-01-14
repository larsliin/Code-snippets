public function stripspaces(str : String) : String
{
    return str.replace(/^\s+|\s+$/g, "");
}