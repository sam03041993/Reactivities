﻿using Domain;
using MediatR;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities.Queries
{
    public class GetActivityDetails
    {
        public class Query : IRequest<Activity>
        {
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext _context) : IRequestHandler<Query, Activity>
        {
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync([request.Id], cancellationToken);

                return activity ?? throw new Exception("Activity not found");
            }
        }
    }
}
