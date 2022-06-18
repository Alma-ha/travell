using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Domain;
using MediatR;
using System.Threading.Tasks;
using AutoMapper;
using Persistence;

public class Command : IRequest<object>
        {
            public ArtCulture ArtCulture { get; set; }
        }
namespace Application.ArtCultures
{
    public class Edit
    {
         public class Command : IRequest
        {
            public ArtCulture ArtCulture { get; set; }
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
                var artculture = await _context.ArtCulture.FindAsync(request.ArtCulture.Id);
                
                _mapper.Map(request.ArtCulture, artculture);

                await _context.SaveChangesAsync();
                
                return  Unit.Value;         
            }
        }
    }
}