using Microsoft.EntityFrameworkCore;
using Backend_mg.Model;
namespace Backend_mg.Model
{
    public class DbCotext : DbContext
    {
        public DbCotext(DbContextOptions<DbCotext> options) : base(options) { }

        public DbSet<ContactInformation> ContactInformation { get; set; }
        public DbSet<capturetable> capturetable { get; set; }

        public DbSet<Dynamic_input_types> dynamic_input_types { get; set; }

        public DbSet<QuizQuestions> QuizQuestions { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactInformation>().ToTable("ContactInformation");
            modelBuilder.Entity<Dynamic_input_types>().ToTable("Dynamic_input_types");
            modelBuilder.Entity<QuizQuestions>().ToTable("QuizQuestions");
        }

    }
}
