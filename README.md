# blazor_coreclr_demo

[https://pavelsavara.github.io/blazor_coreclr_demo/](https://pavelsavara.github.io/blazor_coreclr_demo/)

NuGet.config
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <fallbackPackageFolders>
    <clear />
  </fallbackPackageFolders>
  <packageSources>
    <clear />
    <add key="dotnet11" value="https://pkgs.dev.azure.com/dnceng/public/_packaging/dotnet11/nuget/v3/index.json" />
  </packageSources>
  <disabledPackageSources>
    <clear />
  </disabledPackageSources>
</configuration>
```

# .NET SDK 11.0.100-preview.4.26210.111 or later
```sh
dotnet --version
dotnet new blazorwasm -f net11.0
dotnet package add Microsoft.Extensions.DependencyInjection.Abstractions --prerelease
dotnet package add Microsoft.Extensions.Configuration.Abstractions --prerelease
dotnet package add Microsoft.Extensions.Hosting.Abstractions --prerelease
dotnet package add Microsoft.Extensions.Logging.Abstractions --prerelease
dotnet package add Microsoft.Extensions.Primitives --prerelease
dotnet package add Microsoft.Extensions.Options --prerelease
dotnet publish -bl -c Release /p:UseMonoRuntime=false /p:WasmEnableWebcil=false
dotnet serve -p 8081 -d bin/Release/net11.0/publish/wwwroot
```