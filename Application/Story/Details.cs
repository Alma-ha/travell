using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Story
{
    public class Details
    {
         public class Query : IRequest<Stories>{
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Stories>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Stories> Handle(Query request, CancellationToken cancellationToken)
            {
             return await _context.Stories.FindAsync(request.Id);
            }
        }
    }
}