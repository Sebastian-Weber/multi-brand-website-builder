import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../tokens/build/tokens.json';

// Generated from tokens/build/tokens.json, so it always shows the current tokens.
type Token = { name: string; tier: string; group: string; value: string; ref: string | null };
const all = tokens as Token[];

const Swatch = ({ t }: { t: Token }) => (
  <div style={{ width: 168, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
    <div style={{ height: 56, background: `var(--${t.name})` }} />
    <div style={{ padding: '6px 8px', fontSize: 12, lineHeight: 1.4, color: '#212121' }}>
      <code style={{ display: 'block', wordBreak: 'break-all' }}>--{t.name}</code>
      <span>{t.ref ? `${t.ref} · ${t.value}` : t.value}</span>
    </div>
  </div>
);

const Block = ({ title, items }: { title: string; items: Token[] }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px', color: '#212121' }}>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{items.map((t) => <Swatch key={t.name} t={t} />)}</div>
  </section>
);

const AllTokensPage = () => (
  <div style={{ fontFamily: 'system-ui, sans-serif' }}>
    <Block title="Primitives (tier 1)" items={all.filter((t) => t.tier === 'primitive')} />
    <Block title="Semantic: cdColors (tier 2)" items={all.filter((t) => t.group === 'cd')} />
    <Block title="Semantic: cdColorsLegacy (tier 2)" items={all.filter((t) => t.group === 'legacy')} />
  </div>
);

const meta = { title: 'Foundations/Colors', parameters: { a11y: { disable: true } } } satisfies Meta;
export default meta;

export const AllTokens: StoryObj = { render: () => <AllTokensPage /> };
