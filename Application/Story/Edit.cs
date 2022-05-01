using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Story
{
    public class Edit
    {
         public class Command : IRequest
        {
            public Stories Stories { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var stories = await _context.Stories.FindAsync(request.Stories.Id);
                
                _mapper.Map(request.Stories, stories);

                await _context.SaveChangesAsync();
                
                return  Unit.Value;         
            }
        }
    }
}