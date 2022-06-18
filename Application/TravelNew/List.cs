using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.TravelNew
{
    public class List
    {
         public class Query : IRequest<List<TravelNews>> {}
         public class Handler : IRequestHandler<Query, List<TravelNews>>
        {
         private readonly DataContext _context;
        private readonly ILogger<List> _logger;
            public Handler(DataContext context)
            {
          
            _context = context;
            }

            public async Task<List<TravelNews>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.TravelNews.ToListAsync(cancellationToken);
            }
        }
    }
}