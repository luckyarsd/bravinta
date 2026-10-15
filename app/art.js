// All the artwork is inline SVG, so there are no image files to load.
const BOLT = 'M13 2 4 14h7l-1 8 9-12h-7z';

export function Turbine({ x, y, len = 60, w = 3, dur = 14, t0 = 0, to = 480 }) {
  const b = `M0 0L${-w} ${-len * 0.32}L0 ${-len}L${w * 0.75} ${-len * 0.28}Z`;
  return (
    <g>
      <path d={`M${x} ${y}V${to}`} stroke="#fff" strokeWidth={w * 1.1} strokeLinecap="round" />
      <g
        className="rot"
        style={{
          transformOrigin: `${x}px ${y}px`,
          animationDuration: `${dur}s`,
          animationDelay: `-${t0}s`,
        }}
      >
        {[0, 120, 240].map((r) => (
          <path key={r} d={b} fill="#fff" transform={`translate(${x} ${y}) rotate(${r})`} />
        ))}
      </g>
      <circle cx={x} cy={y} r={w * 1.15} fill="#fff" />
    </g>
  );
}

export function Panels({ x, y, w, rows, cols, rh = 18, skew = 14, id = 'pn' }) {
  const out = [];
  for (let r = 0; r < rows; r++) {
    const y0 = y + r * rh,
      y1 = y0 + rh - 3,
      s0 = skew,
      s1 = 0;
    out.push(
      <polygon
        key={r}
        points={`${x + s0},${y0} ${x + w + s0},${y0} ${x + w + s1},${y1} ${x + s1},${y1}`}
        fill="#12337a"
        stroke="#7a9be0"
        strokeWidth=".8"
      />,
    );
    for (let c = 1; c < cols; c++) {
      const f = c / cols;
      out.push(
        <line
          key={`${r}-${c}`}
          x1={x + s0 + w * f}
          y1={y0}
          x2={x + s1 + w * f}
          y2={y1}
          stroke="#7a9be0"
          strokeWidth=".7"
        />,
      );
    }
    out.push(
      <line
        key={`h${r}`}
        x1={x + (s0 + s1) / 2}
        y1={(y0 + y1) / 2}
        x2={x + w + (s0 + s1) / 2}
        y2={(y0 + y1) / 2}
        stroke="#7a9be0"
        strokeWidth=".5"
        strokeOpacity=".6"
      />,
    );
  }
  return <g>{out}</g>;
}

export function Car({ x, y, s = 1, body = '#1b8a3a', glass = '#cfe6f6' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M0 30Q0 21 11 19L28 17Q36 4 56 4Q76 4 86 17L104 19Q114 21 114 30V40H0Z"
        fill={body}
      />
      <path d="M31 16Q38 8 53 8V16Z" fill={glass} />
      <path d="M58 8Q72 8 79 16H58Z" fill={glass} />
      <rect x="-3" y="26" width="5" height="3" fill="#fff" />
      <rect x="111" y="26" width="5" height="4" fill="#f5b83d" />
      {[25, 90].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="40" r="12" fill="#0a1a4a" />
          <circle cx={cx} cy="40" r="5.5" fill="#c9d3ee" />
        </g>
      ))}
    </g>
  );
}

export function Charger({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect width="32" height="80" rx="7" fill="#fff" />
      <rect x="5" y="9" width="22" height="26" rx="3" fill="#0a1a4a" />
      <path d={BOLT} fill="#3dbc5a" transform="translate(8 11) scale(.7)" />
      <circle cx="16" cy="66" r="3" fill="#3dbc5a" />
    </g>
  );
}

const STARS = [
  [14, 40, 1.6],
  [60, 120, 1.2],
  [108, 70, 1.4],
  [170, 28, 1.2],
  [196, 150, 1.6],
  [250, 60, 1.2],
  [300, 24, 1.4],
  [350, 110, 1.2],
  [402, 48, 1.6],
  [430, 150, 1.2],
  [470, 20, 1.4],
  [500, 96, 1.2],
  [612, 34, 1.6],
  [690, 70, 1.2],
  [716, 150, 1.6],
  [640, 128, 1.2],
  [40, 210, 1.2],
  [150, 236, 1.4],
  [270, 180, 1.2],
  [330, 210, 1.4],
  [420, 230, 1.2],
  [724, 24, 1.4],
  [580, 14, 1.2],
  [100, 150, 1],
  [210, 92, 1],
];

export function Scene({ uid, className = '' }) {
  const g = `sky-${uid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 740 564"
      role="img"
      aria-label="Solar canopy, EV charger, wind turbines and solar array at dusk"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#091946" />
          <stop offset=".5" stopColor="#6f5f4c" />
          <stop offset=".86" stopColor="#bb914c" />
          <stop offset="1" stopColor="#d6a24e" />
        </linearGradient>
      </defs>
      <rect width="740" height="564" fill={`url(#${g})`} />
      {STARS.map(([x, y, r], i) => (
        <circle
          key={i}
          className="tw"
          style={{ animationDelay: `${(i % 7) * 0.6}s` }}
          cx={x}
          cy={y}
          r={r}
          fill="#fff"
          fillOpacity=".8"
        />
      ))}
      {[118, 100, 84, 70, 58, 46].map((r, i) => (
        <circle key={r} cx="545" cy="217" r={r} fill="#f5b83d" fillOpacity={0.05 + i * 0.012} />
      ))}
      <circle cx="545" cy="217" r="33" fill="#ffd97a" />
      <circle cx="545" cy="217" r="26" fill="#fff2b8" />
      {[
        [545, 191],
        [573, 204],
        [601, 215],
        [629, 224],
        [657, 231],
        [684, 233],
        [712, 231],
      ].map(([x, y], i) => (
        <circle
          key={i}
          className="flow"
          style={{ animationDelay: `${i * 0.35}s` }}
          cx={x}
          cy={y}
          r="4.2"
          fill="#f5b83d"
        />
      ))}
      <Turbine x={119} y={359} len={42} w={2.4} dur={11} t0={3} to={470} />
      <Turbine x={220} y={316} len={72} w={3.2} dur={15} to={470} />
      <Turbine x={339} y={374} len={40} w={2.4} dur={12} t0={6} to={470} />
      <path d="M0 492Q150 478 300 490T560 478T740 482V564H0Z" fill="#1f9a45" />
      <path d="M0 487Q150 485 300 488T560 477T740 480V564H0Z" fill="#1b8a3a" />
      <rect y="486" width="740" height="78" fill="#0b3d2e" />
      <polygon
        points="72,382 330,382 312,412 52,412"
        fill="#12337a"
        stroke="#7a9be0"
        strokeWidth="1"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={72 + (258 / 6) * i + 0}
          y1="382"
          x2={52 + (260 / 6) * i}
          y2="412"
          stroke="#7a9be0"
          strokeWidth=".8"
        />
      ))}
      <rect x="60" y="412" width="5" height="139" fill="#dfe6f5" />
      <rect x="304" y="412" width="5" height="139" fill="#dfe6f5" />
      <Car x={82} y={491} />
      <Charger x={241} y={472} />
      <Panels x={384} y={485} w={330} rows={3} cols={5} rh={21} skew={14} />
    </svg>
  );
}

const Sky = ({ id, a, b }) => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={a} />
        <stop offset="1" stopColor={b} />
      </linearGradient>
    </defs>
    <rect width="370" height="118" fill={`url(#${id})`} />
  </>
);
const Hill = ({ y = 62, c = '#1f9a45' }) => (
  <path d={`M0 ${y}Q90 ${y - 14} 190 ${y - 2}T370 ${y - 6}V118H0Z`} fill={c} />
);

export function Mini({ k }) {
  const id = `m-${k}`;
  return (
    <svg viewBox="0 0 370 118" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {k === 'hub' && (
        <>
          <Sky id={id} a="#0f1f4a" b="#6a5a45" />
          <Hill y={52} />
          <Turbine x={80} y={30} len={26} w={1.8} dur={13} to={78} />
          <Car x={14} y={82} s={0.46} />
          <Panels x={170} y={76} w={190} rows={2} cols={6} rh={15} skew={14} />
        </>
      )}
      {k === 'ev' && (
        <>
          <Sky id={id} a="#0c2a6b" b="#1b8a3a" />
          <Car x={20} y={42} s={0.95} body="#fff" glass="#cfe6f6" />
          <Charger x={310} y={22} s={0.9} />
        </>
      )}
      {k === 'chargers' && (
        <>
          <Sky id={id} a="#e3edf7" b="#cfe0ee" />
          <Charger x={130} y={14} s={1.1} />
          <Charger x={232} y={32} s={0.88} />
        </>
      )}
      {k === 'solar' && (
        <>
          <Sky id={id} a="#7ab4ee" b="#d6e9fb" />
          <Panels x={8} y={72} w={330} rows={3} cols={9} rh={15} skew={16} />
        </>
      )}
      {k === 'batt' && (
        <>
          <Sky id={id} a="#0a1a4a" b="#0e4533" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${48 + i * 68} 18)`}>
              <rect
                width="50"
                height="82"
                rx="9"
                fill="#183b55"
                stroke="#3dbc5a"
                strokeOpacity=".6"
              />
              <rect
                x="6"
                y={72 - (14 + i * 17)}
                width="38"
                height={14 + i * 17}
                rx="4"
                fill="#3dbc5a"
                fillOpacity={0.55 + i * 0.15}
              />
              <path d={BOLT} transform="translate(13 8) scale(.9)" fill="#fff" />
            </g>
          ))}
        </>
      )}
      {k === 'wind' && (
        <>
          <Sky id={id} a="#0d2a68" b="#4a79b8" />
          <Hill y={78} />
          <Turbine x={92} y={36} len={26} w={1.8} dur={12} to={96} />
          <Turbine x={196} y={22} len={34} w={2.2} dur={15} t0={4} to={96} />
          <Turbine x={302} y={40} len={24} w={1.8} dur={11} t0={7} to={96} />
        </>
      )}
    </svg>
  );
}

export const Bolt = ({ size = 22, color = '#1b8a3a' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d={BOLT} fill={color} />
  </svg>
);
