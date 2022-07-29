using System;
using System.Collections.Generic;
using System.Text;
using EcommerceSourceAbp.Localization;
using Volo.Abp.Application.Services;

namespace EcommerceSourceAbp;

/* Inherit your application services from this class.
 */
public abstract class EcommerceSourceAbpAppService : ApplicationService
{
    protected EcommerceSourceAbpAppService()
    {
        LocalizationResource = typeof(EcommerceSourceAbpResource);
    }
}
