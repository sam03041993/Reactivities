using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class AppDbContext(DbContextOptions dbContextOptions) : DbContext(dbContextOptions)
    {
        public required DbSet<Activity> Activities { get; set; }
    }
}
