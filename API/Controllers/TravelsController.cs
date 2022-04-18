using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class TravelsController : BaseApiController
    {
        private readonly DataContext _context;
        public TravelsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task <ActionResult<List<Travel>>> GetTravels()
        {
                return await _context.Travels.ToListAsync();
        }
        [HttpGet("{id}")] //travels/id
        public async Task<ActionResult<Travel>> GetTravel(Guid id)
        {
            return await _context.Travels.FindAsync(id);      
          }
    }
}