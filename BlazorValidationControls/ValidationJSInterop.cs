using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace BlazorValidationControls
{
    public static class ValidationJSInterop
    {
        public static Task IsRequired(string element, string msg)
        {
            return JSRuntime.Current.InvokeAsync<object>("validation.isRequired", element, msg);
        }

        public static Task IsInRange(string element, int minimum, int maximum, string msg)
        {
            return JSRuntime.Current.InvokeAsync<object>("validation.isInRange", element, minimum, maximum, msg);
        }

        public static Task CompareTo(string element, string compareElement, object valueToCompare, string msg)
        {
            return JSRuntime.Current.InvokeAsync<object>("validation.compareTo", element, compareElement, valueToCompare, msg);
        }

        public static Task ValidateRegEx(string element, string expression, string msg)
        {
            return JSRuntime.Current.InvokeAsync<object>("validation.validateRegEx", element, expression, msg);
        }
    }
}
