using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ArtCultures
{
    public class Details
    {
          public class Query : IRequest<ArtCulture>{
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, ArtCulture>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<ArtCulture> Handle(Query request, CancellationToken cancellationToken)
            {
                 return await _context.ArtCulture.FindAsync(request.Id);
            }
        }
    }
}