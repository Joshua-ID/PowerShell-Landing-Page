export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} PowerFit. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
