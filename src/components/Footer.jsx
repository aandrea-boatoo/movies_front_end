export default function Footer() {
    return (
        <footer className="blue-bg from-blue-800 to-blue-600 text-white text-center p-4">
            <div>
                <p>Project work made with React+Bootstrap</p>
                <div className="flex flex-row justify-center space-x-4 pt-2">
                    <a
                        href="https://github.com/aandrea-boatoo"
                        target="_blank"
                        className="text-blue-200 hover:underline"
                    >
                        Andrea Boato
                    </a>
                </div>
            </div>
            <div className="container mx-auto pt-3">
                <p className="text-sm">
                    &copy; 2025 BobBuster inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}