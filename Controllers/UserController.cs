using ApplicationCore.User.Requests;
using ApplicationCore.User.Responses;
using Microsoft.AspNetCore.Mvc;

namespace PlanningService.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ApiControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<ReadUserDto>> GetUsers()
    {
        return await Mediator.Send(new GetUsersRequest());
    }
}



