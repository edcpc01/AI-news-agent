"use client";
import { useState } from 'react';

export default function Home() {
  const [numero, setNumero] = useState("");

  const salvarConfiguracao = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Número ${numero} salvo com sucesso para receber as notícias!`);
  };

  return (
    <main className="min-h-screen p-8 bg-slate-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
          🤖 AI News Agent
        </h1>
        <p className="text-sm text-slate-500 text-center mb-8">
          Configure seu envio diário de notícias sobre AI e Código via WhatsApp.
        </p>

        <form onSubmit={salvarConfiguracao} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Seu WhatsApp (com DDD)
            </label>
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Ex: 11999999999"
              className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:border-blue-500 focus:ring-blue-500 text-slate-900 bg-slate-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
          >
            Salvar Configuração
          </button>
        </form>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Status do Sistema</h2>
          <div className="flex items-center text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
            <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            <span className="font-medium">Agente Online — Aguardando horário de envio (09:00)</span>
          </div>
        </div>
      </div>
    </main>
  );
}