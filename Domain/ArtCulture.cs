using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class ArtCulture
    {
        public Guid Id { get; set; }

        public string Title { get; set; }
        public DateTime Date{ get; set; }
        public string City { get; set; }
        public string ArtTitle { get; set; }
        public string ArtDescription { get; set; }
        public string CultureTitle { get; set; }
        public string CultureDescription { get; set; }
        public string Reviews { get; set; }
    }
}