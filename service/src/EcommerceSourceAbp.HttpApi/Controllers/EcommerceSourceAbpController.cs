using EcommerceSourceAbp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EcommerceSourceAbp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class EcommerceSourceAbpController : AbpControllerBase
{
    protected EcommerceSourceAbpController()
    {
        LocalizationResource = typeof(EcommerceSourceAbpResource);
    }
}
