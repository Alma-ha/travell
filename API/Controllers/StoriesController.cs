using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Story;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
   public class StoriesController : BaseApiController
    {
       

        [HttpGet]
        public async Task <ActionResult<List<Stories>>> GetStories()
        {
                return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")] //stories/id
        public async Task<ActionResult<Stories>> GetStories(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});   
          }
          [HttpPost]
          public async Task<IActionResult> CreateStories(Stories stories){
              return Ok(await Mediator.Send(new Create.Command{Stories = stories}));
          }

           [HttpPut("{id}")]
          public async Task<IActionResult> EditStories(Guid id,Stories stories)
          {
              stories.Id=id;
              return Ok(await Mediator.Send(new Edit.Command{Stories= stories}));
          }

          [HttpDelete("{id}")]
          public async Task<IActionResult> DeleteStories(Guid id)
          {
              return Ok(await Mediator.Send(new Delete.Command{Id = id}));
          }
    }
}