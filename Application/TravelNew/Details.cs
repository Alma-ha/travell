using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.TravelNew
{
    public class Details
    {
          public class Query : IRequest<TravelNews>{
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, TravelNews>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<TravelNews> Handle(Query request, CancellationToken cancellationToken)
            {
             return await _context.TravelNews.FindAsync(request.Id);
            }
        }
    }
}