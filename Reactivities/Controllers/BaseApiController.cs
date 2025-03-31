﻿using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Reactivities.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator? _mediator;

        protected IMediator Mediator =>
            _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
                      ?? throw new InvalidOperationException("Mediator service is unavailable");
    }
}
