// finds closests value in array
public function snap(numarr : Array, num : Number) : Number
{
    var d : Number,p : Number,m : Number = 99999,i : Number = numarr.length;
    while (i--)
    {
        d = numarr[i] - num;
        m = (d < 0 ? d *= -1 : d) < m ? (p = i,d) : m;
    }
    return numarr[p];
}