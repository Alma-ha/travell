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

namespace Application.Travels
{
    public class List
    {
        public class Query : IRequest<List<Travel>> {}

        public class Handler : IRequestHandler<Query, List<Travel>>
        {
        private readonly DataContext _context;
        private readonly ILogger<List> _logger;
            public Handler(DataContext context)
            {
          
            _context = context;
            }

            public async Task<List<Travel>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Travels.ToListAsync(cancellationToken);
            }
        }
    }
}