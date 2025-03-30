using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Reactivities.Controllers
{
    public class ActivitiesController(AppDbContext appDbContext) : BaseApiController
    {
        private readonly AppDbContext _context = appDbContext;

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            var activity = await _context.Activities.FindAsync(id);
            if (activity == null) return NotFound();

            return Ok(activity);
        }
    }
}
