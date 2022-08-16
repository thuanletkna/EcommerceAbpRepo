using System;
using System.Linq;

namespace EcommerceSourceAbp.Extensions
{
    public static class SqlExtensions
    {
        public static IQueryable<T> If<T>(
            this IQueryable<T> source,
            bool condition,
            Func<IQueryable<T>, IQueryable<T>> transform
        )
        {
            return condition ? transform(source) : source;
        }
    }
}