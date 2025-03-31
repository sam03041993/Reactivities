﻿using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistance;

namespace Reactivities.Controllers
{
    public class ActivitiesController() : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new GetActivityList.Query()); //_context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            return await Mediator.Send(new GetActivityDetails.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(Activity activity)
        {
            return await Mediator.Send(new CreateActivity.Command { Activity = activity });
        }

        [HttpPut]
        public async Task<ActionResult<string>> EditActivity(Activity activity)
        {
            await Mediator.Send(new EditActivity.Command { Activity = activity });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string id)
        {
            await Mediator.Send(new DeleteActivity.Command { Id = id });
            return NoContent();
        }
    }
}
