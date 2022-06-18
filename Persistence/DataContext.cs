using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options) : base(options)
        {
        }

        public DbSet<Travel> Travels { get; set; }
        public DbSet<Stories> Stories {get; set; }

        public DbSet<ArtCulture> ArtCulture {get; set; }
         public DbSet<TravelNews> TravelNews {get; set; }
    }
}