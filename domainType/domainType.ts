function domainType(domains: string[]): string[] {
  const domainType: string[] = [];
  for (const domain of domains) {
    const domainName = domain.split(".")[domain.split(".").length - 1];
    console.log(domainName);
    if (domainName === "com") {
      domainType.push("commercial");
    } else if (domainName === "org") {
      domainType.push("organization");
    } else if (domainName === "net") {
      domainType.push("network");
    } else if (domainName === "info") {
      domainType.push("information");
    } else {
      domainType.push("unknown");
    }
  }
  return domainType;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
