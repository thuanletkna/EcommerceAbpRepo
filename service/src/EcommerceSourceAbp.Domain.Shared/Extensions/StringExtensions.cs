namespace EcommerceSourceAbp.Extensions
{
    public static class StringExtensions
    {
        public static int GetWordStartIndexAtPosition(this string text, int position)
        {
            if (text.Length - 1 < position)
                position = text.Length - 1;

            if (text[position] == ' ')
                return position;

            while (text[position] != ' ' && position > 0)
                position--;

            return position == 0 ? 0 : position + 1;
        }
    }
}