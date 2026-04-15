# Blazor WASM running CoreCLR interpreter

[Live Demo](https://pavelsavara.github.io/blazor_coreclr_demo/)

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

**Make sure that you DON'T HAVE ANY OLD ALPHA release in your SDK folder**

```sh
dotnet --info
```

Create new Blazor wasm app publish it with /p:UseMonoRuntime=false

```sh
dotnet new blazorwasm -f net11.0
dotnet publish -bl -c Release /p:UseMonoRuntime=false /p:WasmEnableWebcil=false
dotnet serve -p 8081 -d bin/Release/net11.0/publish/wwwroot
```