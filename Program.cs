using ApplicationCore.Common.Interfaces;
using Infrastructure;
using MediatR;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var sqlConBuilder = new SqlConnectionStringBuilder();


builder.Services.AddControllersWithViews();

//DI.CreateDI(builder.Services);
builder.Services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
sqlConBuilder.ConnectionString = builder.Configuration.GetConnectionString("SQLDbConnection");
builder.Services.AddDbContext<ApplicationDbContext>(opt => opt.UseSqlServer(sqlConBuilder.ConnectionString));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
