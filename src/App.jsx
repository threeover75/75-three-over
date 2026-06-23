export default function App() {
  const colors = {
    bg: "#f6f2eb",
    card: "#ffffff",
    text: "#222222",
    subText: "#666666",
    green: "#2f6b4f",
    greenSoft: "#dfe9e1",
    red: "#b84d34",
    redSoft: "#f2dfd9",
    border: "#e7dfd3",
  };

  const wrapStyle = {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 24px 100px",
  };

  const sectionStyle = {
    backgroundColor: colors.card,
    borderRadius: "26px",
    padding: "26px 22px",
    marginBottom: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    border: `1px solid ${colors.border}`,
  };

  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: colors.green,
    fontWeight: 700,
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "24px",
    lineHeight: 1.45,
    margin: "0 0 12px",
    color: colors.text,
    fontWeight: 700,
  };

  const textStyle = {
    fontSize: "15px",
    lineHeight: 1.9,
    color: colors.subText,
    margin: "0 0 10px",
    paddingRight: "120px",
  };

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: colors.red,
    color: "#fff",
    textDecoration: "none",
    padding: "13px 22px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow: "0 10px 20px rgba(184,77,52,0.25)",
  };

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${colors.bg} 0%, #f3eee6 100%)`,
        minHeight: "100vh",
        fontFamily:
          '"Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif',
        color: colors.text,
      }}
    >
      {/* ヘッダー */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(246,242,235,0.92)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            ...wrapStyle,
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
                backgroundColor: "#fff",
                boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="/logo.jpg"
                alt="75 three over ロゴ"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: "25px",
                  lineHeight: 1.05,
                  fontWeight: 800,
                  color: colors.green,
                }}
              >
                75 <span style={{ color: colors.red }}>three over</span>
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#7a7a7a",
                  marginTop: "5px",
                  letterSpacing: "0.08em",
                }}
              >
                club adjustment & maintenance
              </div>
            </div>
          </div>

          <a href="#contact" style={buttonStyle}>
            相談する
          </a>
        </div>
      </header>

      <main style={{ ...wrapStyle, paddingTop: "20px" }}>
        {/* ファーストビュー */}
        <section
  style={{
    ...sectionStyle,
    padding: "32px 24px",
    background:
      "linear-gradient(180deg, #faf8f3 0%, #f3efe7 100%)",
  }}
>
  <div
  style={{
    display: "grid",
    gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "1fr 1fr",
    gap: "32px",
    alignItems: "center",
  }}
>
    {/* キャッチコピー */}
    <div>
      <div
        style={{
          display: "inline-block",
          color: colors.green,
          fontSize: "14px",
          fontWeight: "700",
          marginBottom: "16px",
        }}
      >
        75 THREE OVER
      </div>

      <h1
        style={{
          fontSize: "40px",
          lineHeight: "1.2",
          margin: "0 0 20px",
          fontWeight: "800",
          letterSpacing: "-0.05em",
          color: colors.text,
        }}
      >
        クラブの違和感、
        <br />
        <span style={{ color: colors.green }}>
          見過ごして
          <br />
          いませんか？
        </span>
      </h1>

      <div
        style={{
          width: "120px",
          height: "3px",
          backgroundColor: "#d7d1c5",
          borderRadius: "999px",
          marginBottom: "24px",
        }}
      />

      <p
        style={{
          fontSize: "15px",
          lineHeight: "2",
          color: colors.subText,
          margin: 0,
        }}
      >
        スイングや癖、目指すゴルフによって、
        <br />
        “ちょうどいい一本”は一人ひとり違います。
        <br />
        あなたに合った形に仕上げて、
        ゴルフが
         <br />
        もっと楽しくなる一本をお届けします。
      </p>
    </div>

    {/* イラスト */}
    <div
  style={{
    backgroundColor: "#ffffff",
    borderRadius: "28px",
    padding: "20px",
    border: `1px solid ${colors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img
  src="/images/catch-copy.png"
  alt="あなたにとってのちょうどいい一本"
  style={{
    width: "100%",
    display: "block",
  }}
/>
    </div>

  
  </div>
</section>

 {/* コンセプト */}
<section style={sectionStyle}>
  <div style={labelStyle}>CONCEPT</div>

  <p style={textStyle}>
    クラブは、誰にでも同じように合うものではありません。
  </p>

  <p style={textStyle}>
    スイングや癖、目指すゴルフによって、
    “ちょうどいい一本”は一人ひとり違います。
  </p>

  <div
    style={{
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #ffffff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      margin: "22px auto",
    }}
  >
    <img
      src="/images/certification.jpg"
      alt="認定証写真"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>

  <p style={textStyle}>
    現在お使いのクラブやご要望をもとに、
    一本ずつ丁寧に向き合い、
  </p>

  <p style={textStyle}>あなたに合った形に仕上げます。</p>

  <p style={textStyle}>
    派手さはありませんが、
    確かな変化を感じてもらえるように。
  </p>

  <p style={{ ...textStyle, marginBottom: 0 }}>
    そんな一本をお届けします。
  </p>
</section>



        {/* 悩み */}
        <section style={sectionStyle}>
          <div style={labelStyle}>FOR YOU</div>
          <h2 style={titleStyle}>こんなお悩みありませんか？</h2>

          <div style={{ display: "grid", gap: "10px", marginTop: "16px" }}>
            {[
              "飛距離が伸びない",
              "ミスのばらつきが気になる",
              "今のクラブが合っているかわからない",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#faf7f2",
                  borderRadius: "16px",
                  padding: "14px",
                  border: `1px solid ${colors.border}`,
                  fontSize: "15px",
                  color: "#444",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* サービス */}
        <section style={sectionStyle}>
          <div style={labelStyle}>SERVICE</div>
          <h2 style={titleStyle}>クラブ調整について</h2>

          <p style={textStyle}>
            現在お使いのクラブをもとに、バランス・長さ・重さ
            <br />  
            などを調整します。
          </p>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            大きく変えるのではなく、
            <br />
            “違和感をなくす”ことを大切にしています。
          </p>
        </section>

{/* 対応内容 */}
<section style={sectionStyle}>
  <div style={labelStyle}>MENU</div>

  <h2 style={titleStyle}>対応内容</h2>

  <ul
    style={{
      listStyle: "none",
      padding: 0,
      margin: "16px 0 0 0",
      color: "#444",
      fontSize: "15px",
      lineHeight: "2",
    }}
  >
    <li>・グリップ交換</li>
    <li>・シャフト交換</li>
    <li>・バランス調整</li>
    <li>・長さ調整</li>
    <li>・クラブメンテナンス</li>
    <li>・ご相談</li>
  </ul>

  <div
  style={{
    marginTop: "20px",
    borderRadius: "18px",
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
  }}
>
  <img
    src="/images/shaft-change.jpg"
    alt="クラブ調整の作業風景"
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

<div
  style={{
    marginTop: "20px",
    borderRadius: "18px",
    overflow: "hidden",
    border: `1px solid ${colors.border}`,
  }}
>
  <img
    src="/images/top-work.jpg"
    alt="シャフト調整中"
    style={{
      width: "100%",
      height: "220px",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
</section>

        {/* 特徴 */}
        <section style={sectionStyle}>
          <div style={labelStyle}>FEATURE</div>
          <h2 style={titleStyle}>特徴</h2>

          <div style={{ display: "grid", gap: "10px", marginTop: "16px" }}>
            {[
              "一人ひとりに合わせた調整",
              "無理な提案はしません（できないことはしません）",
              ].map((item) => (
              <div
                key={item}
                style={{
                  background: "linear-gradient(135deg, #f7faf7 0%, #ffffff 100%)",
                  borderRadius: "16px",
                  padding: "14px",
                  border: `1px solid ${colors.border}`,
                  fontSize: "15px",
                  color: "#444",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ブランドメッセージ */}
        <section
          style={{
            ...sectionStyle,
            textAlign: "center",
            background:
              "linear-gradient(180deg, #ffffff 0%, #f8f4ee 100%)",
          }}
        >
          <div style={labelStyle}>BRAND MESSAGE</div>
          <p
            style={{
              fontSize: "23px",
              lineHeight: 1.75,
              color: colors.text,
              margin: "0 0 12px",
              fontWeight: 700,
            }}
          >
            75（three over）くらいで回れたら、
            <br />
            ちょっと気持ちいい。
          </p>
          <p style={{ ...textStyle, marginBottom: 0 }}>
            そんな一本を一緒につくっていけたら嬉しいです。
          </p>
        </section>

{/* 料金について */}
<section style={sectionStyle}>
  <div style={labelStyle}>PRICE</div>

  <h2 style={titleStyle}>料金について</h2>

  <p style={textStyle}>
    作業内容やクラブの状態によって、
    <br />
    調整方法や費用は異なります。
  </p>

  <p style={textStyle}>
    まずは現在お使いのクラブやお悩みを
    <br />
    お聞かせください。
  </p>

  <p style={{ ...textStyle, marginBottom: 0 }}>
    ご相談内容をもとに、
    <br />
    作業内容と料金の目安をご案内します。
  </p>
</section>

{/* ご依頼の流れ */}
<section style={sectionStyle}>
  <div style={labelStyle}>FLOW</div>

  <h2 style={titleStyle}>ご依頼の流れ</h2>

  <ol
    style={{
      listStyle: "none",
      padding: 0,
      margin: "16px 0 0 0",
      color: "#444",
      fontSize: "15px",
      lineHeight: "1.9",
      textAlign: "left",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <li style={{ marginBottom: "8px" }}>① LINEでご相談</li>
    <li style={{ marginBottom: "8px" }}>② クラブの状態やご希望内容を確認</li>
    <li style={{ marginBottom: "8px" }}>③ 作業内容・料金の目安をご案内</li>
    <li style={{ marginBottom: "8px" }}>④ お客様から発送</li>
    <li style={{ marginBottom: "8px" }}>⑤ 調整・メンテナンス</li>
    <li style={{ marginBottom: "8px" }}>⑥ お客様へ発送</li>
  </ol>
</section>

        {/* お問い合わせ */}
        <section
          id="contact"
          style={{
            ...sectionStyle,
            backgroundColor: colors.green,
            color: "#fff",
            border: "none",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#d9e9de",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            CONTACT
          </div>

          <h2
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              margin: "0 0 12px",
            }}
          >
            お問い合わせ
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.9,
              color: "#eef7f1",
              margin: "0 0 18px",
            }}
          >
            LINEよりご連絡ください。
            <br />
            現在お使いのクラブの調整やメンテナンスについて、
            <br />
            ご希望の内容を教えていただけるとスムーズです。
          </p>

          <a href="https://lin.ee/ZtPqoEt" style={buttonStyle}>
            LINEで相談する
          </a>
        </section>
      </main>

      {/* 下固定ボタン */}
      <a
        href="https://lin.ee/ZtPqoEt"
        style={{
          position: "fixed",
          left: "16px",
          right: "16px",
          bottom: "16px",
          backgroundColor: colors.red,
          color: "#fff",
          textAlign: "center",
          textDecoration: "none",
          padding: "15px 20px",
          borderRadius: "999px",
          fontWeight: 800,
          fontSize: "15px",
          boxShadow: "0 14px 28px rgba(184,77,52,0.28)",
        }}
      >
        LINEで相談する
      </a>
    </div>
  );
}