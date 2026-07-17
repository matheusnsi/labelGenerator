import { useEffect, useRef, useState } from 'react'
import JsBarcode from 'jsbarcode'

interface LabelData {
  productName: string
  code: string
  batch: string
  date: string
  quantity: string
}

const initial: LabelData = {
  productName: 'Painel Frontal ABS',
  code: '7891234567895',
  batch: 'L-2026-0512',
  date: '2026-05-12',
  quantity: '250',
}

export default function App() {
  const [data, setData] = useState<LabelData>(initial)
  const barcodeRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!barcodeRef.current) return
    try {
      JsBarcode(barcodeRef.current, data.code.trim() || '0000000000', {
        format: 'CODE128',
        height: 48,
        width: 1.6,
        fontSize: 13,
        margin: 4,
      })
    } catch {
      // valor inválido para o formato — ignora
    }
  }, [data.code])

  const set =
    (field: keyof LabelData) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, [field]: e.target.value })

  const dateLabel = data.date
    ? new Date(data.date).toLocaleDateString('pt-BR')
    : '—'

  return (
    <div className="app">
      <header className="topbar">
        <h1>🏷️ Gerador de Etiquetas</h1>
        <button className="print-btn" onClick={() => window.print()}>
          Imprimir etiqueta
        </button>
      </header>

      <div className="layout">
        <section className="panel">
          <h2>Dados do produto</h2>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Produto
              <input value={data.productName} onChange={set('productName')} />
            </label>
            <label>
              Código (código de barras)
              <input value={data.code} onChange={set('code')} />
            </label>
            <div className="row">
              <label>
                Lote
                <input value={data.batch} onChange={set('batch')} />
              </label>
              <label>
                Quantidade
                <input
                  value={data.quantity}
                  onChange={set('quantity')}
                  inputMode="numeric"
                />
              </label>
            </div>
            <label>
              Data
              <input type="date" value={data.date} onChange={set('date')} />
            </label>
          </form>
        </section>

        <section className="panel">
          <h2>Prévia</h2>
          <div className="label" id="printable-label">
            <div className="label-header">
              <span>■ INDÚSTRIA</span>
              <span>Qtd: {data.quantity || '—'}</span>
            </div>
            <h3 className="label-product">{data.productName || 'Produto'}</h3>
            <div className="label-meta">
              <span>
                Lote: <strong>{data.batch || '—'}</strong>
              </span>
              <span>
                Data: <strong>{dateLabel}</strong>
              </span>
            </div>
            <svg ref={barcodeRef} className="label-barcode" />
          </div>
        </section>
      </div>
    </div>
  )
}
