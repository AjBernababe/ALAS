using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ALAS.Core.Models;

namespace ALAS.Data.DataAccess
{
    public class AppDbContext : DbContext
    {
        // Define your database sets here (e.g., Customers, Products)
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Set SQLite as the database provider and specify the database file path
            optionsBuilder.UseSqlite("Data Source=alas.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Customize your entity mappings if needed
        }
    }
}
