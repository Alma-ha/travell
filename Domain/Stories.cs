using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
        public class Stories
    {
        public Guid Id { get; set; }

        public string Title { get; set; }
        public DateTime Date{ get; set; }
        public string StoryDescription { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
         }
    }