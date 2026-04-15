import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Search,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Documentos Pendentes", value: "12", color: "text-amber-600" },
    { label: "Processados por OCR", value: "128", color: "text-blue-600" },
    { label: "Alertas de Governança", value: "3", color: "text-red-600" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar de Elite: Expansível no Hover */}
      <aside className="group w-20 hover:w-64 bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out z-50 shadow-xl">
        {/* Logo / Nome do Projeto */}
        <div className="p-6 h-20 flex items-center border-b border-slate-800 overflow-hidden whitespace-nowrap">
          <ShieldCheck className="text-blue-400 min-w-[32px]" size={32} />
          <span className="ml-4 text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ProjetoG2 <span className="text-blue-400 text-sm italic">AI</span>
          </span>
        </div>

        {/* Navegação */}
        <nav className="flex-1 p-4 space-y-2 overflow-hidden">
          {[
            {
              icon: <LayoutDashboard size={24} />,
              label: "Visão Geral",
              active: true,
            },
            { icon: <FileText size={24} />, label: "Documentos OCR" },
            { icon: <Users size={24} />, label: "Clientes" },
            { icon: <Settings size={24} />, label: "Configurações" },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                item.active
                  ? "bg-blue-600 shadow-lg shadow-blue-900/20"
                  : "hover:bg-slate-800"
              }`}
            >
              <div className="min-w-[24px] flex justify-center">
                {item.icon}
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Botão Sair */}
        <button
          onClick={() => navigate("/")} // Redireciona para a Home ao clicar em Sair
          className="p-6 flex items-center border-t border-slate-800 hover:bg-red-500/10 text-red-400 transition-all overflow-hidden whitespace-nowrap"
        >
          <LogOut size={24} className="min-w-[24px]" />
          <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sair do Sistema
          </span>
        </button>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header Superior */}
        <header className="bg-white shadow-sm h-20 px-8 flex justify-between items-center z-10">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Pesquisar cliente ou documento..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 border-l pl-6 border-gray-100">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  Admin
                </p>
                <p className="text-xs text-gray-500 mt-1">G2 Governança</p>
              </div>
              <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                G2
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo com Scroll Independente */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Painel de Governança
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className={`text-4xl font-extrabold ${item.color}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Dropzone de OCR */}
            <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group/upload">
              <div className="bg-blue-100 p-6 rounded-2xl mb-6 text-blue-600 group-hover/upload:scale-110 transition-transform duration-300">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Processar Novos Documentos
              </h3>
              <p className="text-gray-500 max-w-sm mb-8">
                Nossa IA extrai automaticamente dados de NF-e, holerites e
                extratos bancários.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all active:scale-95">
                Upload de Arquivos
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
