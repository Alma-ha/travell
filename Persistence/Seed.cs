using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        
        public static async Task SeedData(DataContext context)
        {
            if(context.Travels.Any()) return;

            var travels = new List<Travel>
            {
                new Travel
                {
                    Title= "Traveling to Europe",
                    Date= DateTime.Now.AddMonths(-2), 
                    Description = "Travelling to Paris in Europe",
                    Category = "First Class Airplane",
                    City = "Paris",
                    Venue = "Hotel",
                },
                new Travel
                {
                     Title= "Traveling to America",
                    Date= DateTime.Now.AddMonths(-1), 
                    Description = "Travelling to California in America",
                    Category = "First Class Airplane",
                    City = "California",
                    Venue = "Hotel",
                },
                new Travel 
                {
                     Title= "Traveling to Europe",
                    Date= DateTime.Now.AddMonths(6), 
                    Description = "Travelling to Italy in Europe",
                    Category = "Train Travel",
                    City = "Italy",
                    Venue = "Apartment",
                },
                new Travel 
                {
                     Title= "Traveling to Asia",
                    Date= DateTime.Now.AddMonths(7), 
                    Description = "Travelling to Japan in Asia",
                    Category = "Airplane",
                    City = "Japan",
                    Venue = "Apartment",
                },
                new Travel 
                {
                     Title= "Traveling to America",
                    Date= DateTime.Now.AddMonths(8), 
                    Description = "Travelling to New York in America",
                    Category = "Train Travel",
                    City = "New York",
                    Venue = "Apartment",
                }
            };
            await context.Travels.AddRangeAsync(travels);
            await context.SaveChangesAsync();
        }
    }
}