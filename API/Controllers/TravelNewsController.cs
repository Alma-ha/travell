using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.TravelNew;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers
{
    public class TravelNewsController : BaseApiController
    {
        
        [HttpGet]
        public async Task <ActionResult<List<TravelNews>>> GetTravelNews()
        {
                return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")] 
        public async Task<ActionResult<TravelNews>> GetTravelNews(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});   
          }
          [HttpPost]
          public async Task<IActionResult> CreateTravelNews(TravelNews travelnews){
              return Ok(await Mediator.Send(new Create.Command{TravelNews = travelnews}));
          }

           [HttpPut("{id}")]
          public async Task<IActionResult> EditTravelNews(Guid id,TravelNews travelnews)
          {
              travelnews.Id=id;
              return Ok(await Mediator.Send(new Edit.Command{TravelNews= travelnews}));
          }

          [HttpDelete("{id}")]
          public async Task<IActionResult> DeleteTravelNews(Guid id)
          {
              return Ok(await Mediator.Send(new Delete.Command{Id = id}));
          }
    }
}