using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ArtCultures;
using Domain;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ArtCultureController : BaseApiController
    {
         [HttpGet]
        public async Task <ActionResult<List<ArtCulture>>> GetArtCulture()
        {
                return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")] 
        public async Task<ActionResult<ArtCulture>> GetArtCulture(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});   
          }
          [HttpPost]
          public async Task<IActionResult> CreateArtCulture(ArtCulture artculture){
              return Ok(await Mediator.Send(new Create.Command{ArtCulture = artculture}));
          }

           [HttpPut("{id}")]
          public async Task<IActionResult> EditArtCulture(Guid id,ArtCulture artculture)
          {
              artculture.Id=id;
              return Ok(await Mediator.Send(new Edit.Command{ArtCulture = artculture}));
          }

          [HttpDelete("{id}")]
          public async Task<IActionResult> DeleteArtCulture(Guid id)
          {
              return Ok(await Mediator.Send(new Delete.Command{Id = id}));
          }
    }
}