export default function NotFound() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f0f0f',
            color: '#ffffff',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '24px',
        }}>
            <div>
                <h1 style={{ fontSize: '72px', margin: '0 0 12px' }}>404</h1>
                <p style={{ fontSize: '18px', margin: 0 }}>Page not found.</p>
            </div>
        </main>
    )
}
