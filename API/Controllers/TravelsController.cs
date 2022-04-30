using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Travels;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;



namespace API.Controllers
{
    public class TravelsController : BaseApiController
    {
       

        [HttpGet]
        public async Task <ActionResult<List<Travel>>> GetTravels()
        {
                return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")] //travels/id
        public async Task<ActionResult<Travel>> GetTravel(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});   
          }
          [HttpPost]
          public async Task<IActionResult> CreateTravel(Travel travel){
              return Ok(await Mediator.Send(new Create.Command{Travel = travel}));
          }

          [HttpPut("{id}")]
          public async Task<IActionResult> EditTravel(Guid id,Travel travel)
          {
              travel.Id=id;
              return Ok(await Mediator.Send(new Edit.Command{Travel= travel}));
          }

          [HttpDelete("{id}")]
          public async Task<IActionResult> DeleteTravel(Guid id)
          {
              return Ok(await Mediator.Send(new Delete.Command{Id = id}));
          }
    }
}