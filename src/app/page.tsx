import Image from "next/image";

export default function DesignSystemShowcase() {
  return (
    <div className="container-spacious min-h-screen">
      <header className="mb-24 text-center">
        <h1 className="text-6xl font-serif text-earth-900 mb-6">Earth & Atmosphere</h1>
        <p className="text-xl text-earth-800/60 max-w-2xl mx-auto font-light">
          A design system focused on minimalism, spaciousness, and a zen-like connection to nature.
        </p>
      </header>

      {/* Color Palette Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-serif mb-12 border-b border-earth-100 pb-4">Color Palette</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sage Series */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-sage-500">Sage Green</h3>
            <div className="h-32 rounded-2xl bg-sage-300 shadow-sm flex items-end p-4">
              <span className="text-white font-medium">Primary</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-sage-100"></div>
              <div className="h-16 rounded-lg bg-sage-200"></div>
              <div className="h-16 rounded-lg bg-sage-400"></div>
            </div>
            <p className="text-sm text-earth-800/60 mt-2">Growth, Nature, Calm</p>
          </div>

          {/* Beige Series */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-beige-500">Warm Beige</h3>
            <div className="h-32 rounded-2xl bg-beige-300 shadow-sm flex items-end p-4">
              <span className="text-earth-900 font-medium">Base</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-beige-50"></div>
              <div className="h-16 rounded-lg bg-beige-200"></div>
              <div className="h-16 rounded-lg bg-beige-400"></div>
            </div>
            <p className="text-sm text-earth-800/60 mt-2">Structure, Warmth, Earth</p>
          </div>

          {/* Slate Series */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-slate-500">Soft Slate</h3>
            <div className="h-32 rounded-2xl bg-slate-500 shadow-sm flex items-end p-4">
              <span className="text-white font-medium">Accent</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-slate-100"></div>
              <div className="h-16 rounded-lg bg-slate-300"></div>
              <div className="h-16 rounded-lg bg-slate-600"></div>
            </div>
            <p className="text-sm text-earth-800/60 mt-2">Depth, Sky, Clarity</p>
          </div>

          {/* Neutral/Earth Series */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-earth-800">Earth & Soil</h3>
            <div className="h-32 rounded-2xl bg-earth-800 shadow-sm flex items-end p-4">
              <span className="text-white font-medium">Text</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-earth-50"></div>
              <div className="h-16 rounded-lg bg-earth-100"></div>
              <div className="h-16 rounded-lg bg-earth-900"></div>
            </div>
            <p className="text-sm text-earth-800/60 mt-2">Focus, Contrast, Grounding</p>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-serif mb-12 border-b border-earth-100 pb-4">Typography</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-sage-500 font-medium mb-4 block">Headings - Lora</span>
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-serif text-earth-900">Clean Serif Heading</h1>
                <p className="text-sm text-earth-800/40 mt-2">H1 / Lora / Medium</p>
              </div>
              <div>
                <h2 className="text-4xl font-serif text-earth-900">Professional & Academic</h2>
                <p className="text-sm text-earth-800/40 mt-2">H2 / Lora / Medium</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-earth-900">Distinctive & Elegant</h3>
                <p className="text-sm text-earth-800/40 mt-2">H3 / Lora / Medium</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-sage-500 font-medium mb-4 block">Body - Inter</span>
            <div className="prose prose-stone prose-lg text-earth-800/80">
              <p>
                The body text is set in <strong>Inter</strong>, a typeface carefully crafted & designed for computer screens.
                It features a tall x-height to aid in readability of mixed-case and lower-case text.
              </p>
              <p>
                The atmosphere of the design is kept <em>minimalist</em> and <em>spacious</em>.
                Paragraphs are given room to breathe, with generous line height and margin.
                This creates a "Zen" reading experience that reduces cognitive load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Elements */}
      <section>
        <h2 className="text-3xl font-serif mb-12 border-b border-earth-100 pb-4">Interface Elements</h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Buttons */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif">Buttons</h3>
            <div className="flex flex-col gap-4 items-start">
              <button className="px-8 py-3 bg-sage-300 text-white rounded-full hover:bg-sage-400 transition-colors shadow-sm text-sm font-medium tracking-wide">
                Primary Action
              </button>
              <button className="px-8 py-3 bg-beige-300 text-earth-900 rounded-full hover:bg-beige-400 transition-colors shadow-sm text-sm font-medium tracking-wide">
                Secondary Action
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-500 rounded-full hover:border-slate-500 hover:text-slate-600 transition-colors text-sm font-medium tracking-wide">
                Outline Action
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif">Cards</h3>
            <div className="p-8 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-beige-100">
              <h4 className="font-serif text-xl mb-2">Minimal Card</h4>
              <p className="text-earth-800/60 text-sm mb-6">
                Soft shadows and generous padding define the container style.
              </p>
              <a href="#" className="text-sage-400 text-sm font-medium hover:text-sage-500 transition-colors">Read more &rarr;</a>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif">Inputs</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-6 py-3 rounded-full bg-beige-50 border border-beige-200 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-earth-800 placeholder:text-earth-800/30"
              />
              <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl border border-sage-100/50">
                <div className="w-4 h-4 rounded-full bg-sage-300"></div>
                <span className="text-sm text-sage-500 font-medium">Status Message</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
