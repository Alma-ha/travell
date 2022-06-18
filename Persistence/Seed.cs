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

             if(context.ArtCulture.Any()) return;

            var artculture= new List<ArtCulture>
            {
                new ArtCulture{
                     Title="Art and Culture in Japan",
                    Date=DateTime.Now.AddMonths(8),
                    City="Japan",
                    ArtTitle="Calligraphy",
                    ArtDescription="Delicacy and exquisiteness of form, together with simplicity, characterize traditional Japanese artistic taste. The Japanese tend to view the traditional Chinese arts generally as being too grandiose or showy. The more recently introduced Western arts are felt to suffer from flaws of exuberant self-realization at the expense of earnest exploration of the conflicts in human relations, in particular the notions of divided loyalties between community, family, and self that create the bittersweet melancholy so pervasive in Japanese traditional drama.",
                    CultureTitle="Geisha",
                    CultureDescription="Like most nations, Japan has always had some manner of pleasure quarter offering various forms of entertainment. As Japan cut off all contact with the outside world during the Edo era, the rich merchants of the cities continued to develop the arts of the country in the major urban areas. With the many courtesans of the time providing one area of fulfilment, the merchants looked for other types of entertainment, including music, dance and poetry. From these early stages, the world of the geisha developed, providing a service to entertain and charm, working alongside the very desirable, and for most people unobtainable, courtesan.",
                    Reviews="",
                },
                new ArtCulture{
                     Title="Art and Culture in Mexico",
                    Date=DateTime.Now.AddMonths(8),
                    City="Mexico",
                    ArtTitle="Folk Art",
                    ArtDescription="Among examples of Mexican folk art are several styles of painting, some influenced by European religion and others by indigenous beliefs. These include retablo paintings, small images of saints, and ex-voto images, with writing on them expressing thanks to a particular saint.",
                    CultureTitle="Lady of Guadalupe",
                    CultureDescription="The Feast of Our Lady of Guadalupe(opens in new tab), which is celebrated on Dec. 12, is a major Mexican holiday celebrating the appearance of the Virgin Mary to an indigenous Mexican in the first years of Spanish rule. She is the patron saint of the country. This is followed closely by Posadas, a nine-day celebration in which people re-enact Mary and Joseph's journey to Bethlehem to search for a place to stay. Families go from door to door carrying candles and singing, asking for shelter until the owners open the door, at which point the party begins.",
                    Reviews="",
                },
            };
             if(context.ArtCulture.Any()) return;

            var travelnews= new List<TravelNews>
            {
                new TravelNews{
                     Title="Italy’s nurses to get monthly pay rise of up to €170",
                    Date=DateTime.Now.AddMonths(8),
                    Description="The collective bargaining agreement was signed between Aran, the agency tasked with representing Italian public administrations in labour negotiations, and six healthcare unions late on Wednesday evening, according to Italian media reports.",
                }
            };
            await context.Travels.AddRangeAsync(travels);
            await context.Stories.AddRangeAsync(stories);
            await context.ArtCulture.AddRangeAsync(artculture);
            await context.TravelNews.AddRangeAsync(travelnews);
            
            await context.SaveChangesAsync();
        }
    }
}