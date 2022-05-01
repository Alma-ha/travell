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
             if(context.Stories.Any()) return;

            var stories= new List<Stories>
            {
                new Stories
                {
                    Title="Story in Paris, Europe",
                    Date=DateTime.Now.AddMonths(6),
                    StoryDescription="Paris isn’t something that I could describe into words unless I absolutely had to. As if going abroad for the first time wasn’t scary enough, my first stop was Paris. To put it into simple terms, landing in Paris and just taking in the city while I was riding my cab was quite overwhelming. It was like listening to John Mayer’s “Free Falling” and just swaying to it (inside my head) as the Eiffel Tower was twinkling with us.",
                    Category="Tourist",
                    City="Paris",
                },
                   new Stories
                {
                    Title="Story in Italy, Europe",
                    Date=DateTime.Now.AddMonths(-2),
                    StoryDescription="In a landmark ruling Italy's highest court overturned the dismissal of a Fiat employee who had lost his job after being caught watching a DVD during his lunch break. The court ruled that the employee was free to use his lunch break as he pleased.",
                    Category="Expert",
                    City="Italy",
                },
                new Stories
                {
                    Title="Story in Japan, Asia",
                    Date=DateTime.Now.AddMonths(8),
                    StoryDescription="Traditional Japanese theatre is a colorful and mesmerizing combination of dance, drama and musical accompaniment. The roots of these performing arts go back centuries and have been recognized by the United Nations Education, Scientific and Cultural Organization with their inclusion on the list of Intangible Cultural Heritage of Humanity. Hundreds of theaters across the country still put on performances to this day.",
                    Category="Traveller",
                    City="Japan",
                },
                new Stories
                {
                    Title="Story in China, Asia",
                    Date=DateTime.Now.AddMonths(8),
                    StoryDescription="Traditional Chinese theatre is a colorful and mesmerizing combination of dance, drama and musical accompaniment. The roots of these performing arts go back centuries and have been recognized by the United Nations Education, Scientific and Cultural Organization with their inclusion on the list of Intangible Cultural Heritage of Humanity. Hundreds of theaters across the country still put on performances to this day.",
                    Category="Tourist",
                    City="China",
                },
            };
            await context.Travels.AddRangeAsync(travels);
            await context.Stories.AddRangeAsync(stories);
            
            await context.SaveChangesAsync();
        }
    }
}