using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ALAS.Core.Models;
using ALAS.Data.DataAccess;
using ALAS.Data.Repositories.Interfaces;

namespace ALAS.Data.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(AppDbContext context) : base(context)
        {
        }
    }
}
