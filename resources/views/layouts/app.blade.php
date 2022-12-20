<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Base') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ asset('js/sidebar.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/Favicon.png') }}">
    @yield('css')

    @yield('header')
</head>

<body>
    <div id="app">
        <!-- Sidebar -->
        <div class="sidebar animate__faster animate__animated animate__slideOutLeft">
            <ul class="nav-links pt-0">
                <li class="text-center close-btn pb-1">
                    <i class="material-icons md-36 mx-auto ">close</i>
                </li>

                @auth
                <!-- Home -->
                {{-- <li class="text-center pb-1">
                    <a href="{{ url('/home') }}" class="text-center">
                        <i class="material-icons md-18 mx-auto">home</i>
                    </a>
                    <a href="{{ url('/home') }}">
                        <p class="link mx-auto">Inicio</p>
                    </a>
                </li> --}}
                <!-- Home -->
                <!-- Registro -->
                {{-- <li class="text-center pb-1">
                    <a href="{{ url('/home') }}" class="text-center">
                        <i class="material-icons md-18 mx-auto">receipt_long</i>
                    </a>
                    <a href="{{ url('/home') }}">
                        <p class="link mx-auto">Registro</p>
                    </a>
                </li> --}}
                <!-- Registro -->

                <!-- Catálogos -->
                @if (auth()->user()->hasRole(['Administrador']))
                <li class="text-center">
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19 ">widgets</i>
                        </a>
                        <p class="link">Catálogos</p>
                    </div>
                    <ul class="sub-menu">
                        @role('Administrador')
                        {{-- // if your login user role is admin show the content here --}}
                        <li><a href="{{ url('/months') }}">Meses</a></li>
                        <li><a href="{{ url('/units') }}">Unidades de medida</a></li>
                        <li><a href="{{ url('/trakingStatus') }}">Estados de seguimiento</a></li>
                        {{-- <li><a href="{{ url('/financings') }}">Financiamientos</a></li> --}}
                        <li><a href="{{ url('/periods') }}">Períodos</a></li>
                        <li><a href="{{ url('/years') }}">Años</a></li>
                        <li><a href="{{ url('/institutions') }}">Instituciones</a></li>
                        <li><a href="{{ url('/directions') }}">Direcciones</a></li>
                        <li><a href="{{ url('/organizationalUnits') }}">Unidades organizativas</a></li>
                        <li><a href="{{ url('/users') }}">Usuarios</a></li>
                        <li><a href="{{ url('/indicators') }}">Indicadores</a></li>
                        {{-- <li><a href="{{ url('/poaClosings') }}">Cierre POA</a></li>
                        <li><a href="{{ url('/monthlyClosings') }}">Cierres mensuales</a></li> --}}
                        <!--<li><a href="{{ url('/annualResults') }}">Resultados anuales</a></li>-->
                        @endrole

                    </ul>
                </li>
                @endif
                <!-- Plan Cuscatlán -->
                <li>
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19 ">fact_check</i>
                        </a>
                        <p class="link">Plan Cuscatlán</p>
                    </div>
                    <ul class="sub-menu">
                        @role('Administrador|Auditor')
                        <li><a href="{{ url('/axisCuscatlan') }}">Ejes</a></li>
                        <li><a href="{{ url('/programmaticObjective ') }}">Objetivos Programáticos</a></li>
                        <li><a href="{{ url('/strategyCusca') }}">Estrategias</a></li>
                        <li><a href="{{ url('/resultsCuscatlan') }}">Resultados</a></li>
                        <li><a href="{{ url('/actionsCuscatlan') }}">Acciones</a></li>
                        @endrole
                        @hasanyrole('Administrador|Enlace')
                        <li><a href="{{ url('/trackingCuscatlan') }}">Seguimientos</a></li>
                        @endhasanyrole
                    </ul>
                </li>
                <!-- Plan Cuscatlán -->
                <!-- Catálogos -->
                @if (auth()->user()->hasRole(['Enlace', 'Administrador']))
                <!-- Plan Desarrollo Social -->
                <li>
                    <div class="icon-link">
                        <a href="" class="mb-1">
                            <i class="material-icons md-19 ">handshake</i>
                        </a>
                        <p class="link">Plan de Desarrollo Social</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/programmaticObjective ') }}">Resultado</a></li>
                        <li><a href="{{ url('/municipalities') }}">Resultados Intermedios</a></li>
                        <li><a href="{{ url('/municipalities') }}">Acciones</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Plan Desarrollo Social -->
                <!-- Política Crecer Juntos -->
                <li>
                    <div class="icon-link ">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">groups</i>
                        </a>
                        <p class="link">Política Crecer Juntos</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/municipalities') }}">Resultado de Desarrollo</a></li>
                        <li><a href="{{ url('/programmaticObjective ') }}">Ejes</a></li>
                        <li><a href="{{ url('/municipalities') }}">Resultados</a></li>
                        <li><a href="{{ url('/municipalities') }}">Acciones</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Política Crecer Juntos -->
                <!-- Plan Control Territorial -->
                <li>
                    <div class="icon-link ">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19 ">security</i>
                        </a>
                        <p class="link">Plan Control Territorial</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/municipalities') }}">Componentes</a></li>
                        <li><a href="{{ url('/programmaticObjective ') }}">Resultados</a></li>
                        <li><a href="{{ url('/municipalities') }}">Acciones</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Plan Control Territorial -->
                <!-- Programa de Inversión -->
                <li>
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">attach_money</i>
                        </a>
                        <p class="link">Programa de Inversión</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/programmaticObjective ') }}">Proyectos</a></li>
                        <li><a href="{{ url('/municipalities') }}">Acciones</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Programa de Inversión -->
                <!-- OEI -->
                <li>
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">apartment</i>
                        </a>
                        <p class="link">OEI</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/programmaticObjective ') }}">Resultado</a></li>
                        <li><a href="{{ url('/municipalities') }}">Actividades</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- OEI -->
                <!-- Agenda Digital -->
                <li>
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">book</i>
                        </a>
                        <p class="link">Agenda Digital</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/programmaticObjective ') }}">Resultado</a></li>
                        <li><a href="{{ url('/municipalities') }}">Actividades</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Agenda Digital -->
                <!-- Programación estratégica institucional -->
                <li>
                    @role('Administrador')
                    {{-- <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">folder_off</i>
                        </a>
                        <p class="link">SISE 2.0</p>
                    </div>
                    <ul class="sub-menu">
                        <li><a href="https://10.30.0.121:8181/SISE/content/index.xhtml">Programación Estratégica
                                Institucional</a></li>
                        <li><a href="https://10.30.0.121:8181/SISE/content/index.xhtml">Operativo</a></li>
                    </ul> --}}
                    @endrole
                </li>
                <!-- Programación estratégica institucional -->

                <!-- Ejes transversales -->
                <li>
                    <div class="icon-link">
                        <a href="#" class="mb-1">
                            <i class="material-icons md-19">line_axis</i>
                        </a>
                        <p class="link">Ejes transversales</p>
                    </div>
                    {{-- <ul class="sub-menu">
                        @role('Administrador')
                        <li><a href="{{ url('/programmaticObjective ') }}">Ejes</a></li>
                        <li><a href="{{ url('/municipalities') }}">Resultados</a></li>
                        <li><a href="{{ url('/municipalities') }}">Acciones</a></li>
                        @endrole
                        @role('Enlace')
                        <li><a href="{{ url('/municipalities') }}">Seguimientos</a></li>
                        @endrole
                    </ul> --}}
                </li>
                <!-- Ejes transversales -->
                @endif

                @role('Administrador|Auditor')
                <!-- Reportes -->
                <li>
                    <a href="{{ url('/reportsCuscatlan') }}" class="mb-1">
                        <div class="icon-link">
                            <i class="material-icons md-19">description</i>
                            <p class="link">Reportes</p>
                        </div>
                    </a>
                    {{-- <ul class="sub-menu">
                        @role('Administrador|Auditor')
                        <li><a href="{{ url('/reports') }}">Reporte</a></li>
                        @endrole
                    </ul> --}}
                </li>
                @endrole
                <!-- Reportes -->

                <!-- Gráficos -->
                {{-- @if (auth()->user()->hasRole('Administrador'))
                <li>
                    <a href="{{ url('/graphicsCuscatlan') }}" class="mb-1">
                        <div class="icon-link">
                            <i class="material-icons md-19">leaderboard</i>
                            <p class="link">Gráficos</p>
                        </div>
                    </a>
                </li>
                @endif --}}
                <!-- Gráficos -->
                <!-- Logout -->
                {{-- <li class="text-center pb-1">
                    <a href="{{ route('register') }}" class="text-center"
                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <i class="material-icons md-18 mx-auto">logout</i>
                    </a>
                    <a href="{{ route('logout') }}"
                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <p class="link mx-auto">Cerrar sesión</p>
                    </a>
                </li> --}}
                <!-- Logout -->
                @endauth

                <!-- Login/Logout -->
                @guest
                <li class="text-center pb-1">
                    <a href="{{ url('/login') }}" class="text-center">
                        <i class="material-icons md-18 mx-auto">login</i>
                    </a>
                    <a href="{{ url('/login') }}">
                        <p class="link mx-auto">Iniciar sesión</p>
                    </a>
                </li>

                {{-- @if (Route::has('register'))
                <li class="text-center pb-1">
                    <a href="{{ url('/register') }}" class="text-center">
                        <i class="material-icons md-18 mx-auto">person_add_alt_1</i>
                    </a>
                    <a href="{{ url('/register') }}">
                        <p class="link mx-auto">Registrarse</p>
                    </a>
                </li>
                @endif --}}
                @endguest
                <!-- Login/Logout -->
            </ul>
        </div>
        <!-- Sidebar -->

        <!-- Home Section -->
        <div class="home-section">
            <div class="home-content pt-5 pb-5">
                <div class="container-fluid">
                    <div class="col-6 col-sm-12 col-md-12">
                        <div class="row p-0 m-0">
                            @auth
                            <div class="col-6 col-md-1 menu my-auto">
                                <div class="col-3 col-sm-3 menu my-auto">
                                    <i class="material-icons md-36 mx-auto menu color-secondary my-auto">menu</i>
                                </div>
                            </div>
                            @endauth
                            @guest
                            <div class="col-6 col-md-1 menu pt-0 mt-0 d-block d-md-none d-lg-none d-xl-none">
                                <div class="col-3 col-sm-3 menu">
                                    <i class="material-icons md-36 mx-auto menu color-secondary">menu</i>
                                </div>
                            </div>
                            @endguest

                            <!-- Institution Name -->
                            <div class=" col-sm-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                                <div class="col-4 col-sm-12">
                                    <a class="navbar-brand" href="{{ url('/') }}">
                                        <h2 class="text-uppercase fw-bold color-secondary mb-0">SISE {{date("Y")}}
                                        </h2>
                                    </a>
                                </div>
                            </div>
                            <!-- Institution Name -->

                            <!-- Logo Brand -->
                            {{-- <div class=" col-sm-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                                <div class="col-4 col-sm-12 mb-2">
                                    <a class="navbar-brand" href="{{ url('/home') }}">
                                        <img class="" src="/logos/Logo_GOES_horizontal_D.svg" style="max-width: 60%" />
                                    </a>
                                </div>
                            </div> --}}
                            <!-- Logo Brand -->

                            @guest
                            <div class="col-6 col-md-6 text-right d-none d-md-block d-lg-block d-xl-block">
                                <div class="row mt-2 pt-1">
                                    <div class=" col-md-12 text-end">
                                        <a href="{{ url('/login') }}" class="btn btn-normal-nav shadow-none">Iniciar
                                            sesión</a>
                                        {{-- <a href="{{ route('register') }}"
                                            class="btn btn-normal-secondary-nav shadow-none">Registrarme</a> --}}
                                    </div>

                                </div>
                            </div>
                            @endguest

                            @auth
                            <!-- Logout/UserName -->
                            <div class="col-6 col-md-4 col-sm-4 d-none d-md-block d-lg-block d-xl-block">
                                <div class="row d-none d-md-block">
                                    <div class="col-12 col-sm-12 col-md-12 pb-0 pt-2 mt-1 text-end">
                                        <span class="color-secondary" style="font-size: 16px;">
                                            {{ auth()->user()->user_name }}
                                        </span>
                                        <span class="color-primary"><i class="material-icons">person</i></span>
                                    </div>

                                    <div class="col-12 col-sm-12 col-md-12 pt-0 pb-0 text-end">
                                        <a href="{{ route('logout') }}" class="btn-logout"
                                            onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                            class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Logout/UserName -->
                            @endauth
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home Section -->

        <!-- Main -->
        <main class="main content py-4">
            @yield('content')
        </main>
        <!-- Main -->

        <!-- Footer  -->
        <footer-vue />
        <!-- Footer  -->
    </div>

    <!-- Scripts -->
    @yield('scripts')
</body>

</html>